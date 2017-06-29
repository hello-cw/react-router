;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M914.061 738.748c11.309 0 20.469-9.092 20.469-20.264l0-402.48c0-16.211-5.137-31.23-13.789-43.633-0.352-0.566-0.449-1.211-0.84-1.758-0.684-0.879-1.621-1.357-2.402-2.109-14.238-17.813-36.035-29.434-60.781-29.434L212.341 239.07c-42.988 0-77.813 34.434-77.813 76.934l0 466.143c0 42.51 34.824 76.914 77.813 76.914l644.375 0c42.988 0 77.813-34.404 77.813-76.914l0-64.111c-0.059-11.133-9.18-20.156-20.469-20.156-11.27 0-20.43 9.023-20.488 20.156l0 60.059c0 22.383-18.359 40.508-40.957 40.508L216.443 818.603c-22.598 0-40.977-18.125-40.977-40.508L175.466 320.066c0-2.227 0.313-4.336 0.664-6.465l357.989 288.75c0.02 0 0.059 0.029 0.098 0.049 3.184 2.354 6.816 3.359 10.488 3.76 1.055 0.176 2.09 0.117 3.164 0.146 1.055-0.029 2.09 0.039 3.145-0.146 3.691-0.4 7.324-1.406 10.508-3.76 0.02-0.02 0.059-0.049 0.078-0.049l331.68-285.234c0.078 0.977 0.313 1.943 0.313 2.949l0 398.428C893.592 729.656 902.752 738.748 914.061 738.748L914.061 738.748 914.061 738.748zM216.443 279.549l636.172 0c5.391 0 10.527 1.094 15.254 2.969l-320 276.514L204.783 281.434C208.494 280.32 212.361 279.549 216.443 279.549L216.443 279.549 216.443 279.549zM216.443 279.549"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M409.6 665.6h204.8v358.4H409.6z m599.38816-189.80864l-460.8-460.8a51.2 51.2 0 0 0-72.3968 0l-460.8 460.8a51.2 51.2 0 0 0 72.3968 72.3968l15.01184-14.99136V972.8a51.2 51.2 0 0 0 51.2 51.2h153.6v-102.4h-102.4V430.7968l307.2-307.2 307.2 307.2V921.6h-102.4v102.4h153.6a51.2 51.2 0 0 0 51.2-51.2V533.1968l14.99136 14.99136a51.2 51.2 0 0 0 72.3968-72.3968z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 512a204.8 204.8 0 0 1-204.8-204.8v-102.4A204.8 204.8 0 0 1 512 0a204.8 204.8 0 0 1 204.8 204.8v102.4a204.8 204.8 0 0 1-204.8 204.8zM921.6 1024H102.4a51.2 51.2 0 0 1-51.2-51.2v-51.2c0-169.39008 137.78944-307.2 307.2-307.2h307.2c169.39008 0 307.2 137.80992 307.2 307.2v51.2a51.2 51.2 0 0 1-51.2 51.2zM153.6 921.6h716.8a205.02528 205.02528 0 0 0-204.8-204.8H358.4A205.02528 205.02528 0 0 0 153.6 921.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu" viewBox="0 0 1462 1024">' +
    '' +
    '<path d="M1389.714286 146.285714H74.517943C37.215086 146.285714 2.896457 115.887543 0.2048 78.555429A73.142857 73.142857 0 0 1 73.142857 0h1315.0208c37.419886 0 71.767771 30.398171 74.430172 67.730286A73.142857 73.142857 0 0 1 1389.714286 146.285714z"  ></path>' +
    '' +
    '<path d="M731.428571 585.142857H74.517943C37.215086 585.142857 2.896457 554.744686 0.2048 517.412571A73.142857 73.142857 0 0 1 73.142857 438.857143h656.735086c37.419886 0 71.738514 30.398171 74.430171 67.701028A73.142857 73.142857 0 0 1 731.428571 585.142857z"  ></path>' +
    '' +
    '<path d="M1389.714286 1024H74.517943C37.215086 1024 2.896457 993.601829 0.2048 956.298971A73.142857 73.142857 0 0 1 73.142857 877.714286h1315.0208c37.419886 0 71.738514 30.398171 74.430172 67.701028A73.142857 73.142857 0 0 1 1389.714286 1024z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-store" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M870.4 1024H153.6a51.2 51.2 0 0 1-51.2-51.2V716.8a51.2 51.2 0 0 1 102.4 0v204.8h614.4V716.8a51.2 51.2 0 0 1 102.4 0v256a51.2 51.2 0 0 1-51.2 51.2zM1024 358.4a51.2 51.2 0 0 0-8.6016-28.40576l-204.8-307.2A51.2 51.2 0 0 0 768 0H256a51.2 51.2 0 0 0-42.5984 22.79424l-204.8 307.2A51.2 51.2 0 0 0 0 358.4v76.8A128.14336 128.14336 0 0 0 128 563.2c98.4064 0 127.93856-102.4 128-102.4 11.89888 58.34752 66.19136 102.4 128 102.4 98.4064 0 127.93856-102.4 128-102.4 11.89888 58.34752 66.19136 102.4 128 102.4 98.4064 0 127.95904-102.4 128-102.4 11.89888 58.34752 66.19136 102.4 128 102.4a128.14336 128.14336 0 0 0 128-128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M870.417408 716.814336H204.804096a51.201024 51.201024 0 0 1-51.201024-51.201024V102.402048H0V0h204.804096a51.201024 51.201024 0 0 1 51.201024 51.201024v563.211264h574.393568L907.282146 307.206144H358.407168v-102.402048h614.412288a51.201024 51.201024 0 0 1 49.644513 63.632633l-102.402048 409.608192A51.201024 51.201024 0 0 1 870.417408 716.814336z"  ></path>' +
    '' +
    '<path d="M256.00512 921.597952m-102.402048 0a102.402048 102.402048 0 1 0 204.804096 0 102.402048 102.402048 0 1 0-204.804096 0Z"  ></path>' +
    '' +
    '<path d="M819.195904 921.597952m-102.402048 0a102.402048 102.402048 0 1 0 204.804096 0 102.402048 102.402048 0 1 0-204.804096 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon--float-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M76 64h872c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12zM948 266.7H268c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zM76 341.3h872c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12zM948 544H268c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zM76 618.7h872c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12zM948 821.3H268c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zM76 896h872c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)