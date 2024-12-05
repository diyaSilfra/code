const platform_code = window.location.url + "/kr";
let tab = localStorage.getItem("tab") || "home";
console.log("kokokok im here");
const stopRecording = () => {
  // event.preventDefault();
  console.log("Stop recording button pressed");
  const missingElements = [];
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (!iframeContainer) missingElements.push("iframeContainer");
  const iframe = document.getElementById("iframec");
  if (!iframe) missingElements.push("iframe");
  if (iframe && !iframe.contentWindow)
    missingElements.push("iframe.contentWindow");
  const button = document.getElementById("buttonForIframe");
  if (!button) missingElements.push("button");
  const recordingAnimation = document.getElementById("red-dot");
  if (!recordingAnimation) missingElements.push("recordingAnimation");
  const stopRecordingBtn = document.getElementById("stopRecordingBtn");
  if (!stopRecordingBtn) missingElements.push("stopRecordingBtn");

  if (missingElements.length) {
    console.log("Missing elements: ", missingElements.join(", "));
    return;
  }

  stopRecordingBtn.style.display = "none";
  button.style.display = "flex";
  iframeContainer.style.display = "block";
  recordingAnimation.style.display = "none";
  iframe.contentWindow.postMessage({ action: "stopRecording" }, "*");
};

const startRecording = () => {
  // event.preventDefault();
  console.log("Stop recording button pressed");
  const missingElements = [];
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (!iframeContainer) missingElements.push("iframeContainer");
  const iframe = document.getElementById("iframec");
  if (!iframe) missingElements.push("iframe");
  if (iframe && !iframe.contentWindow)
    missingElements.push("iframe.contentWindow");
  const button = document.getElementById("buttonForIframe");
  if (!button) missingElements.push("button");
  const recordingAnimation = document.getElementById("red-dot");
  if (!recordingAnimation) missingElements.push("recordingAnimation");
  const stopRecordingBtn = document.getElementById("stopRecordingBtn");
  if (!stopRecordingBtn) missingElements.push("stopRecordingBtn");

  if (missingElements.length) {
    console.log("Missing elements: ", missingElements.join(", "));
    return;
  }
  let message = `<div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="32px"
                        height="32px"
                        baseProfile="basic"
                      >
                        <linearGradient
                          id="ONeHyQPNLkwGmj04dE6Soa"
                          x1="16"
                          x2="16"
                          y1="2.888"
                          y2="29.012"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#36eb69" />
                          <stop offset="1" stop-color="#1bbd49" />
                        </linearGradient>
                        <circle
                          cx="16"
                          cy="16"
                          r="13"
                          fill="url(#ONeHyQPNLkwGmj04dE6Soa)"
                        />
                        <linearGradient
                          id="ONeHyQPNLkwGmj04dE6Sob"
                          x1="16"
                          x2="16"
                          y1="3"
                          y2="29"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-opacity=".02" />
                          <stop offset="1" stop-opacity=".15" />
                        </linearGradient>
                        <path
                          fill="url(#ONeHyQPNLkwGmj04dE6Sob)"
                          d="M16,3.25c7.03,0,12.75,5.72,12.75,12.75 S23.03,28.75,16,28.75S3.25,23.03,3.25,16S8.97,3.25,16,3.25 M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13s13-5.82,13-13S23.18,3,16,3 L16,3z"
                        />
                        <g opacity=".2">
                          <linearGradient
                            id="ONeHyQPNLkwGmj04dE6Soc"
                            x1="16.502"
                            x2="16.502"
                            y1="11.26"
                            y2="20.743"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-opacity=".1" />
                            <stop offset="1" stop-opacity=".7" />
                          </linearGradient>
                          <path
                            fill="url(#ONeHyQPNLkwGmj04dE6Soc)"
                            d="M21.929,11.26 c-0.35,0-0.679,0.136-0.927,0.384L15,17.646l-2.998-2.998c-0.248-0.248-0.577-0.384-0.927-0.384c-0.35,0-0.679,0.136-0.927,0.384 c-0.248,0.248-0.384,0.577-0.384,0.927c0,0.35,0.136,0.679,0.384,0.927l3.809,3.809c0.279,0.279,0.649,0.432,1.043,0.432 c0.394,0,0.764-0.153,1.043-0.432l6.813-6.813c0.248-0.248,0.384-0.577,0.384-0.927c0-0.35-0.136-0.679-0.384-0.927 C22.608,11.396,22.279,11.26,21.929,11.26L21.929,11.26z"
                          />
                        </g>
                        <path
                          fill="#fff"
                          d="M10.325,14.825L10.325,14.825c0.414-0.414,1.086-0.414,1.5,0L15,18l6.179-6.179	c0.414-0.414,1.086-0.414,1.5,0l0,0c0.414,0.414,0.414,1.086,0,1.5l-6.813,6.813c-0.478,0.478-1.254,0.478-1.732,0l-3.809-3.809	C9.911,15.911,9.911,15.239,10.325,14.825z"
                        />
                      </svg>
                    </div>
                    <span style="margin-left: 0.5rem">Recording started!</span>`;

  showToast(message);
  if (stopRecordingBtn && button && iframeContainer && recordingAnimation) {
    stopRecordingBtn.style.display = "flex";
    button.style.display = "none";
    iframeContainer.style.display = "none";
    recordingAnimation.style.display = "flex";
  }
};
const showWidget = () => {
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (!iframeContainer) {
    console.log("krWikiIframeContainer not found");
    return;
  }
  const button = document.getElementById("buttonForIframe");
  if (!button) {
    console.log("buttonForIframe not found");
    return;
  }
  button.style.opacity = 1;
  iframeContainer.style.opacity = 1;
};
const hideWidget = () => {
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (!iframeContainer) {
    console.log("krWikiIframeContainer not found");
    return;
  }
  const button = document.getElementById("buttonForIframe");
  if (!button) {
    console.log("buttonForIframe not found");
    return;
  }
  iframeContainer.style.opacity = 0;
  button.style.opacity = 0;
};
const showIframe = () => {
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (!iframeContainer) {
    console.log("krWikiIframeContainer not found");
    return;
  }

  const button = document.getElementById("buttonForIframe");

  if (!button) {
    console.log("buttonForIframe not found");
    return;
  }
  const imgButton = button.getElementsByTagName("img")[0];

  if (!imgButton) {
    console.log("Image inside buttonForIframe not found");
    return;
  }

  iframeContainer.style.display = "block";
  imgButton.src =
    platform_code + "/wp-content/uploads/2024/09/downArrowIcon.png";
};
const hideIframe = () => {
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (!iframeContainer) {
    console.log("krWikiIframeContainer not found");
    return;
  }

  const button = document.getElementById("buttonForIframe");

  if (!button) {
    console.log("buttonForIframe not found");
    return;
  }
  const imgButton = button.getElementsByTagName("img")[0];

  if (!imgButton) {
    console.log("Image inside buttonForIframe not found");
    return;
  }

  iframeContainer.style.display = "none";
  imgButton.src = platform_code + "/wp-content/uploads/2024/09/chat.png";
};
const toggleIframeDisplay = () => {
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (!iframeContainer) {
    console.log("krWikiIframeContainer not found");
    return;
  }

  const iframeDisplay = window.getComputedStyle(iframeContainer).display;

  if (iframeDisplay === "none") {
    showIframe();
  } else {
    hideIframe();
  }
};
const showAttachmentToast = () => {
  const message = `
      <div style="display: flex;align-items: center;justify-content: center;padding: 10px;">
        <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
            <g fill="#000000" transform="translate(-86.000000, -296.000000)">
              <g fill="blue" transform="translate(86.000000, 296.000000)">
                <path d="M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z M9,7 L11,7 L11,5 L9,5 L9,7 L9,7 Z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <span style="margin-left: 0.5rem;">
        You can add multiple attachments up to 128 MB!
      </span>
    `;

  showToast(message);
};

const showScreenshotButton = () => {
  console.log("inside showScreenshotButton");
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (!iframeContainer) {
    console.log("krWikiIframeContainer not found");
    return;
  }
  const screenshotBtn = document.getElementById("screenshotBtn");
  if (!screenshotBtn) {
    console.log("screenshotBtn not found");
    return;
  }
  const button = document.getElementById("buttonForIframe");

  if (!button) {
    console.log("buttonForIframe not found");
    return;
  }
  screenshotBtn.style.display = "flex";
  button.style.display = "none";
  iframeContainer.style.display = "none";
};
const takeScreenshot = (event) => {
  event.preventDefault();
  localStorage.removeItem("screenshot");

  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (!iframeContainer) {
    console.log("krWikiIframeContainer not found");
    return;
  }
  const screenshotBtn = document.getElementById("screenshotBtn");
  if (!screenshotBtn) {
    console.log("screenshotBtn not found");
    return;
  }
  const iframe = document.getElementById("iframec");
  if (!iframe) {
    console.log("iframe not found");
    return;
  }
  if (!iframe.contentWindow) {
    console.log("iframe.contentWindow not found");
    return;
  }
  const button = document.getElementById("buttonForIframe");

  if (!button) {
    console.log("button not found");
    return;
  }

  console.log("takeScreenshot button pressed");
  screenshotBtn.style.display = "none";
  button.style.display = "flex";
  iframeContainer.style.display = "block";
  iframe.contentWindow.postMessage({ action: "takeScreenshot" }, "*");
};
function getBaseUrl(url) {
  const trimmedUrl = url.replace(/\/+$/, ""); // Remove trailing slashes
  const singleSlashedUrl = trimmedUrl.replace(/([^:]\/)\/+/g, "$1"); // Replace double slashes with single slash
  const parsedUrl = new URL(singleSlashedUrl);
  const pathParts = parsedUrl.pathname.split("/");
  return `${parsedUrl.origin}/${pathParts[1]}/`;
}
const sendOnLoadMessage = () => {
  const iframe = document.getElementById("iframec");
  if (!iframe) {
    console.log("iframe not found");
    return;
  }
  if (!iframe.contentWindow) {
    console.log("iframe's contentwindow not found");
    return;
  }
  // const message = {
  //   username: "#{securityContext.userName}",
  //   url: window.location.href,
  //   tab: tab,
  // };
  const userEmail = window.userEmail;

  console.log("kokokok forKRPlatform.js ", { userEmail });
  console.log("kokokok forKRPlatform.js test: ", {
    token: localStorage.getItem("jwt_token"),
    userEmail,
  });

  const message = {
    username: "#{securityContext.userName}",
    displayName: localStorage.getItem("display_name"),
    url: getBaseUrl(window.location.href),
    token: localStorage.getItem("jwt_token"),
    userEmail,
    tab: tab,
  };

  iframe.contentWindow.postMessage(message, "*");
};
const showToast = (message) => {
  const toast = document.getElementById("toast");

  if (!toast) {
    console.log("toast element not found");
    return;
  }

  toast.innerHTML = message;
  toast.style.visibility = "visible";

  // Hide the toast after 3 seconds
  setTimeout(() => {
    toast.style.visibility = "hidden";
  }, 3000);
};

function createStopRecordingButton() {
  // Create button element
  const stopButton = document.createElement("button");
  stopButton.type = "button";
  stopButton.id = "stopRecordingBtn";
  stopButton.className = "fw-bolder btnContainer";
  stopButton.onclick = stopRecording;
  stopButton.style.display = "none"; // Initially hidden
  stopButton.style.position = "fixed";
  stopButton.style.right = "20px";
  stopButton.style.bottom = "60px";
  stopButton.style.zIndex = "2147483647";
  stopButton.style.cursor = "pointer";

  // SVG code for the stop button
  stopButton.innerHTML = `
              <svg
                fill="#fc0303"
                height="50px"
                width="50px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 39.989 39.989"
                xml:space="preserve"
              >
                <path
                  id="XMLID_150_"
                  d="M19.994,0C8.952,0,0,8.952,0,19.995c0,11.043,8.952,19.994,19.994,19.994
                  c11.043,0,19.995-8.952,19.995-19.994C39.989,8.952,31.037,0,19.994,0z M27.744,24.526c0,1.778-1.441,3.219-3.219,3.219h-9.063
                  c-1.778,0-3.219-1.441-3.219-3.219v-9.063c0-1.778,1.441-3.219,3.219-3.219h9.063c1.778,0,3.219,1.441,3.219,3.219V24.526z"
                />
              </svg>
          `;

  // Append the button to the document body
  document.body.appendChild(stopButton);
}
function createRecordingDot() {
  // Create the red-dot div element
  const redDotDiv = document.createElement("div");
  redDotDiv.id = "red-dot";
  redDotDiv.style.border = "1px solid black";
  redDotDiv.style.position = "fixed";
  redDotDiv.style.right = "20px";
  redDotDiv.style.bottom = "125px";
  redDotDiv.style.alignItems = "center";
  redDotDiv.style.paddingRight = "10px";
  redDotDiv.style.display = "none"; // Initially hidden
  redDotDiv.style.zIndex = "2147483647";
  redDotDiv.style.borderRadius = "5px";

  // SVG code for the red-dot div
  redDotDiv.innerHTML = `
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="50px"
                height="50px"
              >
                <circle
                  fill="#FF0808"
                  stroke="#FF0808"
                  stroke-width="16"
                  r="15"
                  cx="50"
                  cy="50"
                >
                  <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2s"
                    values="1;0;1"
                    keySplines=".5 0 .5 1; .5 0 .5 1"
                    repeatCount="indefinite"
                    begin="0s"
                  />
                </circle>
              </svg>
              <p style="color: black">REC</p>
          `;

  // Append the red dot div to the document body
  document.body.appendChild(redDotDiv);
}
function createScreenshotBtn() {
  const screenshotBtn = document.createElement("button");
  screenshotBtn.type = "button";
  screenshotBtn.id = "screenshotBtn";
  screenshotBtn.className = "fw-bolder btnContainer";
  screenshotBtn.onclick = takeScreenshot;
  screenshotBtn.style.display = "none";
  screenshotBtn.style.position = "fixed";
  screenshotBtn.style.right = "20px";
  screenshotBtn.style.bottom = "45px";
  screenshotBtn.style.cursor = "pointer";
  screenshotBtn.style.padding = "5px";
  screenshotBtn.style.borderRadius = "50%";
  screenshotBtn.style.height = "50px";
  screenshotBtn.style.width = "50px";
  screenshotBtn.style.backgroundColor = "red";
  screenshotBtn.style.zIndex = 2147483647;
  screenshotBtn.innerHTML = `
              <?xml version="1.0" ?>
              <svg
                id="Layer_1"
                style="enable-background: new 0 0 30 30; fill: white"
                version="1.1"
                viewBox="0 0 30 30"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect height="2" width="4" x="5" y="5" />
                <g>
                  <circle cx="19" cy="15" r="4" />
                  <path
                    d="M26,6H4C2.895,6,2,6.895,2,8v14c0,1.105,0.895,2,2,2h22c1.105,0,2-0.895,2-2V8C28,6.895,27.105,6,26,6z M9,12H7   c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h2c0.552,0,1,0.448,1,1C10,11.552,9.552,12,9,12z M19,21c-3.314,0-6-2.687-6-6   c0-3.314,2.686-6,6-6s6,2.686,6,6C25,18.313,22.314,21,19,21z"
                  />
                </g>
              </svg>
          `;

  document.body.appendChild(screenshotBtn);
}
function createToast() {
  const toast = document.createElement("div");
  toast.id = "toast";
  toast.style.visibility = "hidden";
  toast.style.marginLeft = "-125px";
  toast.style.backgroundColor = "#fff";
  toast.style.color = "#333";
  toast.style.zIndex = 2147483647;
  toast.style.textAlign = "center";
  toast.style.padding = "0.2 rem 0.7rem";
  toast.style.position = "fixed";
  toast.style.right = "20px";
  toast.style.top = "30px";
  toast.style.width = "393px";
  toast.style.fontSize = "16px";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.webkitBoxShadow = "10px 10px 18px 0px rgba(0, 0, 0, 0.75)";
  toast.style.boxShadow = "10px 10px 18px 0px rgba(0, 0, 0, 0.75)";
  toast.style.borderRadius = "13px";
  toast.style.padding = "10px";
  document.body.appendChild(toast);
}
function createButtonForIframe() {
  const button = document.createElement("button");
  fetch(platform_code + "/wp-json/custom/v1/bg-color")
    .then((response) => response.json())
    .then((data) => {
      // Apply fetched RGBA color to the button background
      const rgbaColor = data;
      button.style.backgroundColor = rgbaColor;
    })
    .catch((error) => {
      console.error("Error fetching color:", error);
      button.style.backgroundColor = "rgb(46, 67, 255)";
    });

  button.type = "button";
  button.id = "buttonForIframe";
  button.className = "btn fw-bolder btnContainer";
  button.style.height = "50px";
  button.style.width = "50px";
  button.style.borderRadius = "50%";
  button.style.display = "flex";
  button.style.opacity = "1";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.position = "fixed";
  button.style.right = "20px";
  button.style.bottom = "45px";
  button.style.zIndex = "2147483647";
  button.style.cursor = "pointer";
  button.style.padding = "10px";

  // Adding click event listener for toggleIframeDisplay function
  button.onclick = toggleIframeDisplay;

  // Creating the img element inside the button
  const img = document.createElement("img");
  img.alt = "icon";
  img.src = platform_code + "/wp-content/uploads/2024/09/chat.png";

  // Append img to button
  button.appendChild(img);

  // Append button to the body
  document.body.appendChild(button);
}

function createIframeContainer() {
  const iframeContainer = document.createElement("div");
  iframeContainer.id = "krWikiIframeContainer";
  iframeContainer.className = "i-container hmm";
  iframeContainer.style.display = "none";
  iframeContainer.style.zIndex = 2147483647;
  iframeContainer.style.position = "fixed";
  iframeContainer.style.bottom = "105px";
  iframeContainer.style.right = "20px";
  iframeContainer.style.width = "393px";
  iframeContainer.style.transformOrigin = "right bottom 0px";
  iframeContainer.style.height = "852px";
  iframeContainer.style.maxHeight = "calc(100svh - 140px)";
  iframeContainer.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px";
  iframeContainer.style.borderRadius = "16px";
  iframeContainer.style.overflow = "hidden";
  iframeContainer.style.opacity = 1;
  iframeContainer.style.transition =
    "width 300ms ease, height 200ms ease, opacity 83ms ease-out";
  iframeContainer.style.pointerEvents = "all";
  iframeContainer.style.backgroundColor = "white";
  iframeContainer.style.minWidth = "393px";
  document.body.appendChild(iframeContainer);
}
function createIframe() {
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  // const iframeUrl =
  //   platform_code + "proxy/" +
  //   "https://krstaging.camptratech.com/knowledgewiki";
  const iframeUrl = "http://localhost:5173/knowledgewiki";

  const maxRetries = 3;
  let attempt = 1;

  // Loading indicator message
  function updateLoadingMessage(attempt) {
    iframeContainer.innerHTML =
      '<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100%;">' +
      '<p style="font-size: large; margin-bottom: 10px;">Attempt ' +
      attempt +
      " of " +
      maxRetries +
      "</p>" +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="75">' +
      '<circle fill="#21030E" stroke="#21030E" stroke-width="15" r="15" cx="40" cy="65">' +
      '<animate attributeName="cy" calcMode="spline" dur="2s" values="65;135;65;" keySplines=".5 0 .5 1; .5 0 .5 1" repeatCount="indefinite" begin="-.4s"></animate>' +
      "</circle>" +
      '<circle fill="#21030E" stroke="#21030E" stroke-width="15" r="15" cx="100" cy="65">' +
      '<animate attributeName="cy" calcMode="spline" dur="2s" values="65;135;65;" keySplines=".5 0 .5 1; .5 0 .5 1" repeatCount="indefinite" begin="-.2s"></animate>' +
      "</circle>" +
      '<circle fill="#21030E" stroke="#21030E" stroke-width="15" r="15" cx="160" cy="65">' +
      '<animate attributeName="cy" calcMode="spline" dur="2s" values="65;135;65;" keySplines=".5 0 .5 1; .5 0 .5 1" repeatCount="indefinite" begin="0s"></animate>' +
      "</circle>" +
      "</svg>" +
      "</div>";
  }

  // Display error message
  function createErrorEle(message) {
    const existingError = document.getElementById("errorId");
    if (!existingError) {
      const errorEle = document.createElement("div");
      errorEle.id = "errorId";
      errorEle.style.width = "100%";
      errorEle.style.height = "100%";
      errorEle.style.display = "flex";
      errorEle.style.justifyContent = "center";
      errorEle.style.alignItems = "center";
      errorEle.style.fontSize = "large";
      errorEle.style.color = "red";
      errorEle.style.backgroundColor = "#f8d7da";
      errorEle.style.zIndex = 2147483647;
      iframeContainer.appendChild(errorEle);
    }
    existingError
      ? (existingError.innerText = message)
      : (document.getElementById("errorId").innerText = message);
  }

  // Recursive fetch with retry and delay
  function attemptFetchWithRetry() {
    updateLoadingMessage(attempt);
    fetch(iframeUrl, {
      method: "HEAD",
    })
      .then((response) => {
        if (response.ok) {
          console.log("URL is accessible. Loading iframe...");

          // Clear loading indicator and create the iframe
          iframeContainer.innerHTML = "";
          const iframe = document.createElement("iframe");
          iframe.src = iframeUrl;
          iframe.id = "iframec";
          iframe.title = "Knowledge Wiki";
          iframe.sandbox =
            "allow-scripts allow-popups allow-forms allow-same-origin";
          iframe.allow = "camera; microphone; display-capture";
          iframe.allowFullscreen = true;
          iframe.style.width = "100%";
          iframe.style.height = "100%";
          iframe.style.border = "none";
          iframe.style.zIndex = 2147483647;

          // Append the iframe to the container
          iframeContainer.appendChild(iframe);
        } else {
          createErrorEle(
            "URL responded with an error status " + response.status
          );
          console.error(
            "URL responded but with an error status ",
            response.status
          );
        }
      })
      .catch((error) => {
        console.error("Failed to reach URL. ", error.message);
        if (attempt < maxRetries) {
          attempt++;
          const retryDelay = Math.pow(2, attempt) * 1000; // Exponential backoff
          console.log("Retrying in " + retryDelay / 1000 + " seconds...");
          setTimeout(attemptFetchWithRetry, retryDelay);
        } else {
          iframeContainer.innerHTML = "";

          console.error("Max retries reached. Unable to load iframe.");
          createErrorEle("The server is down, please try later.");
        }
      });
  }

  if (iframeContainer) {
    attemptFetchWithRetry();
  } else {
    console.warn("iframeContainer not present");
  }
}
function initializeUI() {
  createButtonForIframe();
  createIframeContainer();
  createIframe();
  createStopRecordingButton();
  createRecordingDot();
  createScreenshotBtn();
  createToast();
}

const observeIframeContainer = () => {
  const observer = new MutationObserver((mutationsList, observer) => {
    const iframeContainer = document.getElementById("krWikiIframeContainer");
    if (iframeContainer) {
      observer.disconnect(); // Stop observing after the element is loaded
      const screenshotBtnState = localStorage.getItem("screenshot");
      if (screenshotBtnState === "active") {
        showScreenshotButton();
      }
    }
  });

  // Start observing the document's body for changes
  observer.observe(document.body, { childList: true, subtree: true });
};

// Call the observer to watch for iframeContainer
observeIframeContainer();

const handleMessage = (event) => {
  const { loaded, action, operation, tab } = event.data;

  // Handle visibility based on received data
  console.log("Received message from origin:", event.data);
  if (loaded) {
    sendOnLoadMessage();
  }
  switch (action) {
    case "showAttachmentToast":
      showAttachmentToast();
      break;
    case "toggleWidget":
      toggleIframeDisplay();
      break;
    case "showWidget":
      showIframe();
      break;
    case "hideWidget":
      hideIframe();
      break;
    case "recordingStarted":
      startRecording();
      break;
    case "prepareForScreenshot":
      localStorage.setItem("screenshot", "active");
      showScreenshotButton();
      break;
    case "tabChange":
      if (tab) {
        localStorage.setItem("tab", tab);
      }
      break;
    default:
      break;
  }
  const iframeContainer = document.getElementById("krWikiIframeContainer");
  if (iframeContainer && operation) {
    switch (operation) {
      case "expand":
        iframeContainer.style.width = "50%";
        break;
      case "shrink":
        iframeContainer.style.width = "393px";
        break;
      case "fullExpand":
        iframeContainer.style.width = "90%";
        break;

      default:
        break;
    }
  }
  if (event.data.display === false || event.data.userNameAuth === false) {
    hideWidget();
  } else {
    showWidget();
  }
};
window.addEventListener("message", handleMessage);
initializeUI();
