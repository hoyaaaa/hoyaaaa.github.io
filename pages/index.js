import { Container, Grid } from '@mui/material'
import Head from 'next/head'
import Typography from '@mui/material/Typography';
import { ImageButton, ImageSrc, ImageBackdrop, Image, ImageMarked } from '../components/ImageButton';

const apps = [
  {name: '#실시간 검색어', icon: 'realtime-trends.png', url: 'https://chrome.google.com/webstore/detail/dmbaagbmhlhdnlmbcncneijndejlalie'}
]

export default (props) => {
  return (
    <div className="container">
      <Head>
        <title>HOYA TECH Apps</title>
        <link rel="icon" href="/hoyatech-logo128.png" />
      </Head>

      <Container fixed>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
          <Grid item xs={4}>
            <img src="/images/hoyatech-logo-only.png" alt="hoyatech" style={{width: "100%"}}/>
          </Grid>
          <Grid item xs={8}>
          <Typography variant="h3" component="div" gutterBottom>
          HOYA TECH Apps
      </Typography>
            
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {Array.from(apps).map((app, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <a href={app.url} target="_blank">
                  <ImageButton
                    focusRipple
                    key={app.name}
                    style={{
                      width: '100%',
                    }}
                  >
                    <ImageSrc style={{ backgroundImage: `url(/images/apps/${app.icon})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                      <Typography>
                        {app.name}
                        <ImageMarked className="MuiImageMarked-root" />
                      </Typography>
                    </Image>
                  </ImageButton>
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
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
