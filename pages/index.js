
import Main from '../layouts/main'
import projects from '../projects'
import Link from 'next/link'

export default () => (

  <Main>

    <div className="main">
      <p className="title">iBelieve in</p>
      <div className="projects">
        {
          projects.map(({ id, name, shortName, img, signed }) => (
            // <Link href={`/projects/${id}`}>
            // <Link href={`/project?id=${id}`}>
            // <Link href={`/project?id=${id}?name=${name}?img=${img}?signed=${signed}`}>
            <Link href={`/project?name=${name}&img=${img}`}>
              <a className="project">{ shortName }</a>
            </Link>
          ))
        }
      </div>
    </div>

    <style jsx>{`

      .main {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .title {
        font-size: 14px;
        letter-spacing: 2px;
      }

      .projects {
        margin-top: 15px;
      }

      .project {
        margin: 0 10px;
        color: purple;
      }

    `}</style>

  </Main>
)