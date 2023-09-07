import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash'
import 'tailwindcss/tailwind.css'



export function Paginate({ posts, pageSize, currentPAge, onPageChange }) {
  
const pageCount = posts / pageSize;
if(Math.ceil(pageCount) === 1) return null 
const pages = _.range(1, pageCount + 1)


    return (
        <nav >
        <ul className="pagination"> 
        {pages.map((page) => (  
                <li
                 key={page} 
                 className={page === currentPAge ? 'page-item active' : 'page-item'}>
                <a style={{cursor: 'pointer'}} onClick={() => onPageChange(page)} 
                className="page-link"
                 >
                    {page}
                </a>
              </li>
               ))}
        </ul>
      </nav>
    );
  }
  
  
  
