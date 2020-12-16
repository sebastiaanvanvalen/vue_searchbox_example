<template>
    <div class="report_container form-group">
        <label for="report">meetmoment :</label>
        <div class="report_wr">
            <select
                name="report"
                class="report form-control"
                id="report_select"
                @change="setReport($event)"
            >
                <option class="report_empty"></option>
                <option
                    v-for="reportMoment in allReports"
                    :key="reportMoment.id"
                    name="report"
                    class="report form-control"
                >{{ reportMoment.report }}</option>
            </select>
            <button class="btn btn-primary btn_gr">Groepsrapport</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Report",
    methods: {
        refreshSelect() {
            const select = document.getElementById("report_select");
            select.selectedIndex = 0;
        },
        ...mapActions(["setReport"])
    },
    computed: {
        ...mapGetters(["allReports"]),
        ...mapGetters(["selGroup"])
    },
    watch: {
        selGroup(newValue, oldValue) {
            this.refreshSelect();
            this.$store.commit("setReport", null)
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