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
          Hi, my name is Alessandro Metta. I am a Full Stack Engineer from New
          York City. <br /> <br /> I have extensive experience developing
          application for web, mobile, games and AR.
        </p>
      </section>
      <section className="container mx-auto flex self-center flex-row justify-center content-center mt-6 w-2/3">
        <Link href="https://github.com/n0f3">
          <a target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} width={40} height={40} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/alessandrometta/">
          <a target="_blank" className="ml-3">
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              width={40}
              height={40}
              color="rgba(10, 102, 194, 1.00)"
            />
          </a>
        </Link>
        <Link href="https://stackoverflow.com/users/4927930/alessandro-m">
          <a target="_blank" className="ml-3">
            <FontAwesomeIcon
              icon={['fab', 'stack-overflow']}
              width={40}
              height={40}
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
