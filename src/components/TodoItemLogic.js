export default {
    data() {
        return {
            dialog: false,
            editDialog: false,
            newTask: {
                title: '',
                text: '',
            },
            editedTask: {
                title: '',
                text: '',
            },
            tasks: [],
            editIndex: null,
        };
    },
    methods: {
        addTask() {
            this.tasks.push({ ...this.newTask });
            this.newTask.title = '';
            this.newTask.text = '';
            this.dialog = false;
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        openEditDialog(task, index) {
            this.editedTask = { ...task };
            this.editIndex = index;
            this.editDialog = true;
        },
        updateTask() {
            this.tasks[this.editIndex] = this.editedTask;
            this.editDialog = false;
        },
    },
};