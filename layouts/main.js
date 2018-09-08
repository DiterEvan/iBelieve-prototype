import Head from 'next/head'

export default ({ children }) => (

  <div className="wrapper">

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

		<header className="header">
			<a href="/"><p>iBelieve.com</p></a>
			<a href="https://github.com">
        <img src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
		  </a>
    </header>

    { children }

    <style jsx>{`

      :global(body, p) {
        margin: 0;
      }
      :global(a) {
        text-decoration: none;
      }
      :global(img) {
        vertical-align: top;
      }

      .wrapper {
        font-family: Arial;
        font-size: 13px;
        letter-spacing: 1px;
      }

      .header {
        position: absolute;
        max-width: 1200px;
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1em;
      }
      .header img {
        height: 25px;
      }
      .header p {
        color: #333;
      }

    `}</style>

  </div>
)