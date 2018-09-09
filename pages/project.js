export default class extends React.Component {

  static async getInitialProps({ query }) {
    const name = query.name
    const img = query.img
    return { name, img }
  }

  render() {

    const { name, img } = this.props;

    return (
      <div className="wrapper">
        
        <div className="content">
          <img src={ img }/>
          <p>iBelive in <strong>{ name }</strong></p>
        </div>

        <style jsx>{`

          :global(body, p) {
            margin: 0;
          }
          :global(img) {
            vertical-align: top;
          }

          .wrapper {
            font-family: Arial;
            font-size: 13px;
            letter-spacing: 1px;

            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .content {
            text-align: center;
          }
          .content img {
            height: 70px;
            border-radius: 50%;
            margin-bottom: 15px;
          }

        `}</style>
      </div>
    )
  }
}