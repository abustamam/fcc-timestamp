import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Timestamp Microservice</title>
        <link
          rel="shortcut icon"
          href="https://cdn.hyperdev.com/us-east-1%3A52a203ff-088b-420f-81be-45bf559d01b1%2Ffavicon.ico"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <h2>API Project: Timestamp Microservice</h2>
      <h3>User Stories:</h3>
      <ol className="user-stories">
        <li>
          The API endpoint is{' '}
          <code>GET [project_url]/api/timestamp/:date_string?</code>
        </li>
        <li>
          A date string is valid if can be successfully parsed by{' '}
          <code>new Date(date_string)</code>.<br />
          Note that the unix timestamp needs to be an <strong>
            integer
          </strong>{' '}
          (not a string) specifying <strong>milliseconds</strong>.<br />
          In our test we will use date strings compliant with ISO-8601 (e.g.{' '}
          <code>"2016-11-20"</code>) because this will ensure an UTC timestamp.
        </li>
        <li>
          If the date string is <strong>empty</strong> it should be equivalent
          to trigger <code>new Date()</code>, i.e. the service uses the current
          timestamp.
        </li>
        <li>
          If the date string is <strong>valid</strong> the api returns a JSON
          having the structure
          <br />
          <code>{`{"unix": &lt;date.getTime()&gt;, "utc" : &lt;date.toUTCString()&gt; }`}</code>
          <br />
          e.g.{' '}
          <code>{`{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`}</code>
        </li>
        <li>
          If the date string is <strong>invalid</strong> the api returns a JSON
          having the structure <br />
          <code>{`{"error" : "Invalid Date" }`}</code>.
        </li>
      </ol>

      <h3>Example Usage:</h3>
      <ul>
        <li>
          <a href="api/timestamp/2015-12-25">
            [project url]/api/timestamp/2015-12-25
          </a>
        </li>
        <li>
          <a href="api/timestamp/1451001600000">
            [project url]/api/timestamp/1451001600000
          </a>
        </li>
      </ul>

      <h3>Example Output:</h3>
      <p>
        <code>{`{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`}</code>
      </p>
      <div className="footer">
        <p>
          By <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
        </p>
      </div>

      <style jsx>{`
        body {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          color: #222;
          background-color: #fafafa;
          text-align: center;
          line-height: 1.4em;
        }

        .container {
          padding: 0;
          margin-top: 40px;
        }

        h3 {
          margin-top: 30px;
        }

        .footer {
          margin-top: 40px;
        }

        .user-stories {
          position: relative;
          text-align: justify;
          max-width: 700px;
          margin: 15px auto;
        }
        code {
          font-family: monospace;
          padding: 2px;
          color: black;
          background-color: #fff;
        }
        ol {
          list-style-position: outside;
        }
        ul {
          list-style-type: none;
        }

        li {
          margin-bottom: 0.5em;
        }
        .user-stories li {
          margin-bottom: 1em;
        }

        a {
          color: #2574a9;
        }
      `}</style>
    </div>
  );
}
