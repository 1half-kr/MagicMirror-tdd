Module.register("chat", {
  defaults: {
    lottiePaths: {
      happy: "modules/default/chat/assets/happy_dog.json",
      angry: "modules/default/chat/assets/angry_dog.json",
      surprise: "modules/default/chat/assets/surprise_dog.json",
    },
    defaultExpression: "happy",
    defaultMessage: "안녕! 난 강아지야!"
  },

  currentExpression: null,
  currentMessage: null,
  animInstance: null,

  getScripts() {
    return ["https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"];
  },

  start() {
    this.currentExpression = this.config.defaultExpression;
    this.currentMessage = this.config.defaultMessage;

    // POST API 직접 등록
  },

  getDom() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const messageEl = document.createElement("h1");
    messageEl.className = "chat-message";
    messageEl.textContent = this.currentMessage || this.config.defaultMessage;

    const animContainer = document.createElement("div");
    animContainer.id = "lottieContainer";

    wrapper.appendChild(messageEl);
    wrapper.appendChild(animContainer);

    return wrapper;
  },

  notificationReceived(notification) {
    if (notification === "DOM_OBJECTS_CREATED") {
      const path = this.config.lottiePaths[this.currentExpression];
      this.loadLottie(path);
    }
  },

  updateChat(message, expression) {
    // 메시지 변경
    this.currentMessage = message || this.config.defaultMessage;

    // 표정만 변경 (애니메이션은 중단하지 않음)
    if (expression && this.config.lottiePaths[expression] && this.currentExpression !== expression) {
      this.currentExpression = expression;
      const path = this.config.lottiePaths[expression];
      this.loadLottie(path); // 새 표정 애니메이션 로드
    }

    this.updateDom(); // DOM을 업데이트하여 새 메시지를 반영
  },

  loadLottie(path) {
    const container = document.getElementById("lottieContainer");
    if (container) {
      container.innerHTML = "";
      this.animInstance = lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: path
      });
    }
  },

  getStyles() {
    return ["chat.css"];
  }
});
