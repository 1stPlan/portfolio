import React, {useState, useEffect} from 'react';
import { Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import axios from 'axios';
import Cursor from '../../components/Cursor';
// import { find } from 'lodash';

import PostServices from "../../services/Post";

// paginateの読み込み
import ReactPaginate from 'react-paginate';


function Show(props) {

    const { id } = useParams();
    const [post, setPost] = React.useState(null);

    const [ listEmployee, setListEmployee] = useState([]);
    const [ pass, setPass ] = useState(null);
    const [ content, setContent ] = useState(null);
    const [ rol, setRol ] = useState(null);
    const [ listRol, setListRol ] = useState([]);
    // const [ listCategory, setListCategory ] = useState([]);
    const blog  = id;
    
    const [ offset, setOffset ] = useState(0); // 何番目のアイテムから表示するか
    const perPage = 6; // 1ページあたりに表示したいアイテムの数
  
    let count = 0;
    const [listCount ,setListCount] = useState(0);

    /* -- Post Open---------------------*/
    const [active, setActive] = useState(false);
    const classToggle = () => {
        setActive(!active);
    }

    function formadate(date){
        var date = date.slice(0,10).replaceAll('-', '/');
        return date;
      }

    React.useEffect(() => {

      const getPosts = () => {
        var url =  import.meta.env.VITE_CMS_URL;
        axios.get(url)
          .then(response => {
                const ResponseData = response.data;
                setPost(ResponseData.data.find((post) => post.id === Number(id)));
          });
      };
      getPosts();
      
      async function fetchDataEmployee() {
        const res = await PostServices.listEmployee();
        let itemCountent = [];

        res.data.map((item) => {
            if(id == item.blog_id) {
                itemCountent.push(item);
          }
        });
        setListEmployee(itemCountent);
      }
      fetchDataEmployee();

      async function fetchDataRol() {
          // load data from API
          const res = await PostServices.list();
          setListRol(res.data);
      }
      fetchDataRol();

      // async function fetchDataCategory() {
      //     // load data from API
      //     const res = await PostServices.category();
      //     const post = res.data.find((post) => post.id === Number(id));
      //     setListCategory(post);
      // }
      // fetchDataCategory();

    }, []);

    // クリック時のfunction
    function handlePageChange(data) {
        let page_number = data['selected']; // クリックした部分のページ数が{selected: 2}のような形で返ってくる
        setOffset(page_number*perPage); // offsetを変更し、表示開始するアイテムの番号を変更
    }

    const onClickDelete = async (i, id, pass) => {

      const result = prompt('passを入力してください','');

      if (result == pass) {
          var yes = confirm("本当に削除してよろしいですか？");
      } else {
          alert('passが違います。');
      }

      if (yes === true) {
          const res = await PostServices.delete(id);

          if (res.success) {
              alert(res.message);
              const newList = listEmployee;
              newList.splice(i, 1);
              setListEmployee(newList);
          } else {
              alert(res.message);
          }
      }
  };

  const saveEmployee = async () => {
      
      const data = {
          pass, content, rol, blog
      }
      const res = await PostServices.save(data);
      alert(res.message);
      window.location.reload();

  }

    if (!post)return null;

    return (
      <>
      <Cursor />

      <div>
        <div className='blog'>
            <div className='blog__inner'>
                <div className='blog__content'>
                
                    <div className="blog__header">
                        <h3 className='blog__tittle'>{ post.title.rendered }</h3>
                        <p className='blog__date'>{ formadate(post.date) }</p>
                    </div>

                    <div className="blog__body">
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>
                    
                    <Link
                    to={"/blog/"}
                    className="btn btn-secondary btn-lg mx-auto d-block w-25 pt-3 pb-3"
                    >
                    戻る
                    </Link>
                </div>
            </div>
        </div>

        <section className={`post ${active ? "open" : ""}`}>
                <div className="post__circle-spase">
                    <div className="post__circle" onClick={classToggle}>
                        <span className="post__circle-span">
                            { active ? 
                            <i className="fas fa-angle-double-down"></i> :
                            <i className="fas fa-angle-double-up"></i>
                            }
                            
                        </span>
                    </div>
                </div>
                <div className="post__inner">
                    <table className="post__table">
                        <thead className="post__thead">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">コメント</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody className="post__tbody">
                
                            {listEmployee.slice(offset, offset + perPage).map((item, i) => {
                                if(count === 0){
                                    count = offset;
                                }
                                if(id == item.blog_id){
                                    count++;
                                    return (
                                        <tr className='post__content'>
                                            <td className='post__content-th' scope="row">{count}</td>
                                            <td className='post__content-td1'>{item.content}</td>
                                            {/* <td className='post__content-td2'></td> */}
                                            <td>
                                            {item.role.role_name == "Admin" ? 
                                            <p>管理者</p> 
                                            :<a
                                                href="#"
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        onClickDelete(i, item.id, item.pass)
                                                    }
                                                >
                                                    {" "}
                                                    Delete{" "}
                                                </a>
                                            }
                                                
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                            </tbody>
                    </table>
                    <table className="post__table-input">
                        <tbody className="post__tbody-input">
                            <tr className='post__input'>
                                <td className=''>
                                    <div className="">
                                        <label for="content">コメント内容</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="内容を記載してください。"
                                            onChange={(e)=> setContent(e.target.value)}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="">
                                        <label for="pass">削除用Pass</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Pass"
                                            onChange={(e)=>setPass(e.target.value)}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="">
                                        <button 
                                        className="btn btn-primary btn-block" 
                                        type="submit"
                                        onClick={()=>saveEmployee()}
                                        >
                                                投稿
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(listEmployee.length/perPage)} // 全部のページ数。端数の場合も考えて切り上げに。
                        marginPagesDisplayed={2} // 一番最初と最後を基準にして、そこからいくつページ数を表示するか
                        pageRangeDisplayed={5} // アクティブなページを基準にして、そこからいくつページ数を表示するか
                        onPageChange={handlePageChange} // クリック時のfunction
                        containerClassName={'pagination'} // ページネーションであるulに着くクラス名
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'} // アクティブなページのliに着くクラス名
                        previousClassName={'pagination__previous'} // 「<」のliに着けるクラス名
                        nextClassName={'pagination__next'} // 「>」のliに着けるクラス名
                        disabledClassName={'pagination__disabled'} // 使用不可の「<,>」に着くクラス名
                    /> */}

                </div>
            </section>
        </div>

      </>
    );
}

export default Show;