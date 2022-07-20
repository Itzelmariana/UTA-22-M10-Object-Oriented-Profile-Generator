const generateHTML = ({ name, title, id, github, email }) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header>My Team</header>
    <div class="container customContainer">
      <div class="row">
        <div class="col-4 shadow-sm p-3 bg-body rounded customCard">
          <div class="customTitle">
            <h3>${name}</h3>
            <h4>${title}</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${email}">${email}</a>
            </li>
            <li class="list-group-item">
              Github:
              <a href="https://github.com/{this.github}" target="_blank"
                >${github}</a
              >
            </li>
          </ul>
        </div>  
      </div>
    </div>
  </body>
</html>`;

// function generateHTML({ name, location, github, linkedin })
// { return
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>${name}</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;
// }
// module.exports = generateHTML;
