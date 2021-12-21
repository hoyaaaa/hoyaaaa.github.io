import Head from 'next/head'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { Octokit } from "@octokit/core";
import { Button, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { RepeatOneSharp } from '@mui/icons-material'

export default  (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_ISSUE_KEY });

    const messageType = event.target.type.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const title = event.target.title.value;
    const content = event.target.content.value;

    let body = `### 이름\n\n${name}\n\n`;
    if (email !== "") {
      body += `### 이메일\n\n${email}\n\n`;
    }
    body += `### 내용\n\n${content}`;

    const response = await octokit.request('POST /repos/{owner}/{repo}/issues', {
      owner: 'hoyaaaa',
      repo: 'hoyaaaa.github.io',
      title: (messageType === "ask" ? "질문" :
            messageType === "suggest" ? "제안" :
            messageType === "bug" ? "버그" : "기타") + `: ${title}`,
      body: body
    });

    if (response.status == 201) {
      window.location.reload();
    } else {
      alert("메시지가 제대로 전송되지 않았습니다. 나중에 다시 연락바랍니다.");
    }
  };

  return (
    <div className="container">
      <Head>
        <title>HOYA TECH Donation</title>
        <link rel="icon" href="/hoyatech-logo128.png" />
      </Head>

  
      <Container maxWidth="sm" style={{ height: '50vh', justifyContent: 'center', verticalAlign: 'middle' }}>
        <Paper
          component="form"
          elevation={10}
          sx={{ width: '100%', verticalAlign: 'middle', padding: '30px' }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h4" gutterBottom>
            연락하기
          </Typography>
          <Typography variant="p" gutterBottom>
            당신의 의견을 정말로 듣고 싶습니다.
            <br/>
            질문이나 기능 제안, 버그 신고 등 말할 것이 있으시다면 알려주세요.
            <br/>
            <br/>
            이메일(<Link href="mailto:hoya.develop@gmail.com">hoya.develop@gmail.com</Link>)이나 <Link href="https://github.com/hoyaaaa/hoyaaaa.github.io/issues">Github Issues</Link>를 통해서 직접 연락주셔도 괜찮습니다.
          </Typography>
        <div style={{ marginTop: "10px" }}>
        <RadioGroup row name="type" defaultValue="ask">
          <FormControlLabel value="ask" control={<Radio />} label="질문" />
          <FormControlLabel value="suggest" control={<Radio />} label="제안" />
          <FormControlLabel value="bug" control={<Radio />} label="버그" />
          <FormControlLabel value="other" control={<Radio />} label="기타" />
        </RadioGroup>
        <TextField required fullWidth label="이름" id="name" margin="dense"/>
        <TextField fullWidth label="이메일" id="email" margin="dense"/>
        <TextField required fullWidth label="제목" id="title" margin="dense"/>
        <TextField required multiline minRows={4} fullWidth label="내용" id="content" margin="dense"/>
        </div>
        <Button type="submit" variant="outlined" style={{ marginTop: "10px" }}>Submit</Button>
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
