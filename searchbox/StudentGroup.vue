<template>
    <div class="student_group_container form-group">
        <label for="student_group">klas / groep :</label>
        <select
            name="student_group"
            class="student_group form-control"
            id="student_group_select"
            @change="setGroup($event)"
        >
            <option class="studentgroup_selected_empty"></option>
            <option
                v-for="group in allGroups"
                :key="group.id"
                name="studentGroup"
                class="studentGroup form-control"
            >{{ group.group }}</option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "StudentGroup",
    methods: {
        refreshSelect() {
            const select = document.getElementById("student_group_select");
            select.selectedIndex = 0;
        },
        ...mapActions(["setGroup"])
    },
    computed: {
        ...mapGetters(["allGroups"]),
        ...mapGetters(["selYear"])
    },
    watch: {
        selYear(newValue, oldValue) {
            this.refreshSelect();
            this.$store.commit("setGroup", null)
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