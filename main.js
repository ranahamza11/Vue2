Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks"> {{ task.task }}</task>
        </div>  
    `,

    data() {
        return {
            tasks: [
                { task: 'Go to the store', isCompleted: false },
                { task: 'Go to the Bank', isCompleted: false },
                { task: 'Go to the Street', isCompleted: false },
                { task: 'Go to the Masjid', isCompleted: false },
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});