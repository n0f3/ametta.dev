import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from 'styles/utils.module.css';
import Link from 'next/link';

const name = '';
export const siteTitle = 'Alessandro Metta Portfolio';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}): JSX.Element {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alessandro Metta's Portfolio Website"
        />
        <meta name="og:title" content={siteTitle} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <header className={styles.header}>
        {home && (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main className="flex justify-center align-center flex-col half-width">
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
