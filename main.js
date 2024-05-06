Vue.component('message', {
    props: ['title', 'body'],
    data() {
      return {
          isVisible: true
      };
    },
    template: `
        <message-container v-show="isVisible">
            <message-header>
              {{ title }}
              <button @click="isVisible = false">x</button>
            </message-header>
            <message-body>{{ body }}</message-body>
        </message-container>
      
    `,

    methods: {
        hideMessage() {
            this.isVisible = false;
        }
    }


});

Vue.component('message-container', {
    template: `
        <article class="message">
            <slot></slot>
        </article>
    `
})

Vue.component('message-header', {
    template: `
        <div class="message-header">
             <slot></slot>
        </div>
    `
});

Vue.component('message-body', {
    template: `
        <div class="message-body">
            <slot></slot>
        </div>   
    `
})

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});