<template>
    <div class="schoolyear_container form-group">
        <label for="schoolyear">schooljaar :</label>
        <select class="form-control" @change="setYear($event)">
            <option class="year_selected"></option>
            <option
                v-for="year in allYears"
                :key="year.id"
                name="schoolyear"
                class="schoolyear form-control"
            >{{ year.year }}</option>
        </select>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    name: "Year",

    methods: mapActions(["setYear"]),
    computed: mapGetters(["allYears"]),
};
</script>
<style scoped>
label {
    margin-left: 16px;
    color: rgb(59, 70, 116);
}
</style>
