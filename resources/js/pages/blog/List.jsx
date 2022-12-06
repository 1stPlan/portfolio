import React, {useState, useEffect} from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import Cursor from '../../components/Cursor';
import Loading from '../../components/Loading';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


function List() {

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

    function formDate(date){
      date = date.slice(0,10).replaceAll('-', '/');
      return date;
    }

    function formTitle(title){
      var title_len = title.length;
      console.log(title_len);
      if(title_len > 32 ){ 
        title = title.slice(0,30)+ '...';
      }
      return title;
    }
    React.useEffect(() => {

      const getPosts = () => {
        var url =  import.meta.env.VITE_CMS_URL;

        const params = {
          params: {
              page: page,
              per_page: perPage
          }
        }
        axios.get(url, params)
          .then(response => {
                const ResponseData = response.data;
                setPosts(ResponseData.data);
                setPagination(ResponseData.pagination);
                setIsLoading(false);
          });
      };
      getPosts();
  

    }, [page]);

    // if (!posts)return null;

    return (
      <>
      <Cursor />

      <div className="blog-list">
        <div className="blog-list__inner">

          { isLoading ? <Loading /> :  

            <div>
              <ul className='blog-list__list'>
                {posts.map((post) => (

                  <li className='blog-list__item' key={post.id}>
                     <Link
                      to={"/blog/" + post.id}
                      className="btn btn-light"
                    >
                        <div className="blog-list__thumbnail">
                            {post.thumbnail_url ? 
                              <img src={post.thumbnail_url} width= "100%" /> : 
                              <img src={`/img/no_image.png`} width= "100%" />
                            }
                        </div>
                          <p className='blog-list__time'>{formDate(post.date)}</p>
                          <p className='blog-list__title_rendered'>{formTitle(post.title.rendered)}</p>
            
                        </Link>
                      </li>
                ))}
              </ul>
              
              <nav className="blog-list__navigation">
                  <ul className="pagination pagination-lg">
                      <li className="page-item">
                        <a className={`${"page-link"}  ${active ? "" : "disabled"}`} href="#" onClick={() => movePage('prev')}>前へ</a>
                      </li>
                      <li className="page-item">
                        <a className={`${"page-link"} ${active2 ? "" : "disabled"}`} href="#" onClick={() => movePage('next')}>次へ</a>
                      </li>
                  </ul>
              </nav>
            </div>
          }

        </div>
      </div>
      </>
    );
}

export default List;
