<template>
    <div class="student_container">
        <label for="student">leerling :</label>

        <select
            name="student"
            id="student_select"
            class="student form-control"
            @change="setStudent($event)"
        >
            <option class="student_empty"></option>
            <option
                v-for="student in allStudents"
                :key="student.id"
                name="student"
                class="student form-control"
            >{{ student.student }}</option>
        </select>
        <button class="btn btn-primary btn_lr">Leerlingrapport</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Student",
    methods: {
        refreshSelect() {
            const select = document.getElementById("student_select");
            select.selectedIndex = 0;
        },
        ...mapActions(["setStudent"])
    },
    computed: {
        ...mapGetters(["allStudents"]),
        ...mapGetters(["selReport"])
    },
    watch: {
        selReport(newValue, oldValue) {
            this.refreshSelect();
            this.$store.commit("setStudent", null);
        }
    }
};
</script>

<style scoped>
label {
    margin-left: 16px;
    color: rgb(59, 70, 116);
}
</style>