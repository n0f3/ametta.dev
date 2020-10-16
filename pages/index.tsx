import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PostData {
  date: string;
  title: string;
  id: string;
}

type HomeProps = {
  allPostsData?: Array<PostData>;
};

const Home = ({ allPostsData }: HomeProps): JSX.Element => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="self-center text-left">
        <p>
          Hi, my name is
          <div className="text-3xl mt-2">Alessandro Metta</div>{' '}
          <div className="text-2xl">
            I am a Full Stack Engineer from New York City
          </div>
          <div className="mt-3">
            I have built a wide of variety of applications for web, mobile,
            video games and AR.
            <br />I currently specialize in creating beautiful experiences for
            users leveraging modern web technologies.
          </div>
        </p>
      </section>
      <section className="container mx-auto flex self-center flex-row justify-center content-center mt-6 mb-2">
        {/* <Link href="/portfolio">
          <button className="border-solid border border-black p-2">
            Projects
          </button>
        </Link> */}
        <Link href="/AlessandroMettaResume.pdf">
          <a
            target="_blank"
            className=" border-solid border border-black  p-2 self-center no-underline"
          >
            Resume
          </a>
        </Link>
      </section>

      <section className="container mx-auto flex self-center flex-row justify-evenly content-center mt-6 w-1/6">
        <Link href="https://github.com/n0f3">
          <a target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/alessandrometta/">
          <a target="_blank" className="ml-5">
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              color="rgba(10, 102, 194, 1.00)"
            />
          </a>
        </Link>
        <Link href="https://stackoverflow.com/users/4927930/alessandro-m">
          <a target="_blank" className="ml-5 bottom-10">
            <FontAwesomeIcon
              icon={['fab', 'stack-overflow']}
              color="rgba(253, 126, 20, 1.00)"
            />
          </a>
        </Link>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };

export default Home;
