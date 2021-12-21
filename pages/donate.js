import Head from 'next/head'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default (props) => {
  return (
    <div className="container">
      <Head>
        <title>HOYA TECH Donation</title>
        <link rel="icon" href="/hoyatech-logo128.png" />
      </Head>

  
      <Container maxWidth="sm" style={{ height: '50vh', justifyContent: 'center', verticalAlign: 'middle' }}>
        <Paper elevation={10} sx={{ width: '100%', verticalAlign: 'middle', padding: '30px' }}>
          <Typography variant="h3" component="div" gutterBottom style={{ textAlign: 'center' }}>
            Support by donating
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            이 어플리케이션들이 마음에 드신다면,
            <br/>
            기부를 한 번 고려해보세요.
            <br/>
            당신의 도움이 개발 과정과 기능 추가에 큰 도움이 됩니다. 감사합니다.
          </Typography>
          <Link href="https://www.ko-fi.com/hoyaaaa">
            <a target="_blank"><img src="/images/kofi.png" alt="Buy Me A Coffee" style={{ width: "100%", marginTop: '20px' }}/></a>
          </Link>
        </Paper>
      </Container>

      
                      
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
