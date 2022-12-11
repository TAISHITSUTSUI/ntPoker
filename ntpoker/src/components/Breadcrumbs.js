import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink } from 'react-router-dom';


 const categoryById = { 
  'content' : '学ぶ',
  'about' : 'about',
  'quiz' : 'クイズ',
  'question' : 'みんなに質問',

 }

const DynamicUserBreadcrumb = ({ match }) => (
  // <span>{contentNameById[match.params.contentId]}</span>
  <span>{match.params.contentId}</span>
);

const CustomUserBreadcrumb = ({ match }) => (
  <span>{categoryById[match.params.ccategoryId]}</span>
);


// define custom breadcrumbs for certain routes.
// breadcumbs can be components or strings.
const routes = [
  { path: '/content/:contentId', breadcrumb: DynamicUserBreadcrumb },
  // { path: '/content/:contentId'},
  { path: '/:ccategoryId', breadcrumb: CustomUserBreadcrumb },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="row m-2">
        <div className='d-flex'>
          {breadcrumbs.map(({match, breadcrumb}, index) => (
          <span key={match.pathname}>
            {index > 0 && <> / </>}
            <NavLink className="fs-5 m-3 text-decoration-none text-secondary" to={match.pathname}> {breadcrumb}</NavLink>
          </span>
        ))}
      </div>
    </div>
  );
}
export default Breadcrumbs;