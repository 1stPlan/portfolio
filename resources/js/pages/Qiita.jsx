import React, {useState, useEffect} from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import Cursor from '../components/Cursor';
// import Loading from '../components/Loading';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forEach } from 'lodash';


function Qiita() {

    const [pagination, setPagination] = React.useState(null);
    const [posts, setPosts] = React.useState(null);
    const [page, setPage] = React.useState(1); 
    const [perPage, setPerPage] = React.useState(6); 

    const [active, setActive] = useState(false);   //前へ
    const [active2, setActive2] = useState(true);  //次へ

    const [ isLoading, setIsLoading ] = useState(true);

    function movePage(direction){

      let page_cont = 0;

      if (direction === 'prev') {
        page_cont = page - 1;
       
        //next側のボタン表示非表示の制御 
        pagination.total_pages != page_cont  ?  setActive2(true) : setActive2(false);

        //prev側のボタン表示非表示の制御
        page_cont > 1 ? setActive(true) : setActive(false);

        setPage(page_cont);

      } else if (direction === 'next') {

        page_cont =  page + 1;

        // next側のボタン表示非表示の制御 
        pagination.total_pages != page_cont  ?  setActive2(true) : setActive2(false); 

        //prev側のボタン表示非表示の制御
        page_cont > 1 ? setActive(true) : setActive(false);

        setPage(page_cont);
      }

    };

    function formTitle(title){
      var title_len = title.length;
      if(title_len > 32 ){ 
        title = title.slice(0,30)+ '...';
      }
      return title;
    }

    function formBody(body){
        var str = body.slice(0,100)+ '...';
        const targetChar = "#";
        var result = [...str].filter(char => char !== targetChar).join("");
      return result;
    }

    function formadate(date){
      var date = date.slice(0,10).replaceAll('-', '/');
      return date;
    }

    React.useEffect(() => {

      const getPosts = () => {
        // var url =  import.meta.env.VITE_CMS_URL;
        const url = `https://qiita.com/api/v2/authenticated_user/items`;

        axios.get(url, {
          headers: {
            Authorization: "Bearer 4d3423b81a843e6f517d9326f14f1efd57804366"
          }
        })

          .then(response => {

                const ResponseData = response.data;

                setPosts(ResponseData);
                // setIsLoading(false);
          });
      };
      getPosts();

    }, [page]);

    if (!posts)return null;

    return (
      <>
      <Cursor />

      <div className="qiita-list">
        <div className="qiita-list__inner">

          {/* { isLoading ? <Loading /> :   */}

            <div>
              <h2 className="qiita-list__main-title">qiita 投稿一覧</h2>
              <ul className='qiita-list__list'>

                {posts.map((post) => {
                  return (
                    <>
                    <a className="btn btn-light" target="_blank" href={post.url}>
                    
                      <li className='qiita-list__item'>
                        <h3 className='qiita-list__title'>{formTitle(post.title)}</h3>
                        <p className='qiita-list__date'>{formadate(post.created_at)}</p>
                        <p className='qiita-list__body_rendered'> { formBody(post.body) }</p>
                        <div className='qiita-list__tags'>
                          {post.tags.map((tag) => {
                            return (
                              <>
                                <p className='qiita-list__tag'>
                                  { tag.name }
                                </p>
                              </>
                            )
                          })}

                        </div>
                      </li>       

                    </a>
                  </>
                  );
                })}

              </ul> 
              
            </div>

        </div>
      </div>
      </>
    );
}

export default Qiita;
