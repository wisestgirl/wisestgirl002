// Create a file called layout.js in your main folder and paste the code into it. It will be loaded on every page.

//Edit your header/sidebar/footer etc (= elements that are the same on every page) in this file.

//Use ${nesting} in the JavaScript file to output a relative path, e.g. <img src="${nesting}img/logo.png"> will output <img src="../img/logo.png"> if the current page is in a subfolder, etc.

//Active menu links will be given the class active, so you can style them in the CSS, e.g. nav a.active { ... }





document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...

  //This is for an automatic TOC: use h9 for this: why doesn't this work? i think this can't go in the sidebar
function initTableOfContents() {
	const container = document.querySelector("#toc");
	if (!container) return;

	const allHeadings = document.querySelectorAll("h4");
	if (allHeadings.length < 2) return;
	let output = "<b>table of contents:</b><ol>";
	[...allHeadings].forEach((headingEl) => {
		const title = headingEl.innerHTML;
		const link =
			headingEl.getAttribute("id") ||
			encodeURI(
				title
					.replaceAll(" ", "-")
					.replaceAll("#", "")
					.replaceAll("&", "")
					.replaceAll(/<[^>]*>?/gm, "")
					.replaceAll("--", "-")
			).toLowerCase();
		headingEl.setAttribute("id", link);
		output += `<li><a href="#${link}">${title}</a></li>`;
	});
	container.innerHTML = output + "</ol>";
}

});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
          <div class="header-image">
	          <img  src="https://wisestgirl.neocities.org/img/wisestgirlDRI.png">
          </div>
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <!-- NAVIGATION -->
        <nav>
          <div class="sidebar-title">nav</div>
          <ul>
            <li><a href="/wisestgirl002/home.html">Home</a></li>
            <li><a href="/wisestgirl002/flip.html">flip</a></li>
            <li><a href="/sitemap.html" target="_blank">SITEMAP</a></li>
         
        	<li>
        	
              	<details>
                <summary>wisestgirl versions</summary>
                <ul>
                  <li><a href="/">CURRENT</a></li>
                  <li><a href="/wisestgirl001/home.html">001</a></li>
                  <li><a href="/wisestgirl002/home.html">002</a></li>
                </ul>
                </details>
            </li>
          </ul>
        </nav>

        <div id="toc">
        </div>

        <div class="statuscafe">
          <iframe src="https://petracoding.github.io/neocities/widgets/statuscafe?center=0&marquee=0&font-family=Times New Roman&font-size=14px&color=#565673&linkColor=#d92f2f&username=wisestgirl&hideUsername=0&timeColor=#6d0fba" 
          frameborder="0" width="200px" align="left" title="status.cafe">
          </iframe>
        </div>

      </aside>
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">
	  
        
        <div class="sidebar-section">
          <div class="sidebar-title">follow me on neocities!</div>
          <div class="site-button">
          	<a href="https://neocities.org/site/wisestgirl" target="_blank">to do: make follow button</a>
          </div>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
            <p>to do: make blockquotes better</p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Marquee</div>
          <marquee>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Image</div>
          <img class="full-width-image" src="https://picsum.photos/id/14/1000/400">
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Button</div>
          <p>to do: make site nutton</p>
          <div class="site-button">
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        	<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
          </div>
        </div>
      </aside>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>wisestgirl002 <a href="/">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
