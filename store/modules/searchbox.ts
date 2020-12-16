
const state = {
    // JSON received from API. For now stored in state:
    years: [
        {id: 1, year: 2018, selected: false},
        {id: 2, year: 2019, selected: false}, 
        {id: 3, year: 2020, selected: false}
    ],
    groups: [
        {id: 1, group: '1a', selected: false},
        {id: 2, group: '1b', selected: false},
        {id: 3, group: '2', selected: false},
        {id: 4, group: '3', selected: false}, 
        {id: 5, group: '4', selected: false}, 
        {id: 6, group: '5a', selected: false}, 
        {id: 7, group: '5b', selected: false}, 
        {id: 8, group: '6', selected: false}
    ],
    report: [
        {id: 1, report: 'rapport 1', selected: false}, 
        {id: 2, report: 'rapport 2', selected: false}
    ],
    students: [
        {id: 1, student: 'person 1', selected: false}, 
        {id: 2, student: 'person 2', selected: false}, 
        {id: 3, student: 'person 3', selected: false}, 
        {id: 4, student: 'person 4', selected: false}, 
        {id: 5, student: 'person 5', selected: false}, 
        {id: 6, student: 'person 6', selected: false}, 
        {id: 7, student: 'person 7', selected: false}, 
        {id: 8, student: 'person 8', selected: false}
    ],
    
    // actual state variables
    selYear: null,
    selGroup: null,
    selReport: null,
    selStudent: null
};

const getters = {
    // getters for JSON, for now stored in state. Need to be API-calls in actions/mutations
    allYears: state => state.years,
    allGroups: state => state.groups,
    allReports: state => state.report,
    allStudents: state => state.students,

    // actual getters 
    selYear: state => state.selYear,
    selGroup: state => state.selGroup,
    selReport: state =>state.selReport,
    selStudent: state => state.selStudent,
    getReport() {
        // const thisYear = state.years[state.years.findIndex((obj => obj.selected === true))].year;
        return {
            "year": state.selYear,
            "class": state.selGroup,
            "report": state.selReport,
            "student": state.selStudent
        }
    }
};

const actions = {
    setYear({ commit }, e) {
        const yearId = e.target.options[e.target.options.selectedIndex].innerHTML;
        commit('setYear', yearId)
    },
    setGroup({ commit }, e) {
        let groupId;
        if (e !== null) {
            groupId = e.target.options[e.target.options.selectedIndex].innerHTML;
        } else {
            groupId = null;
        }
            commit('setGroup', groupId)
    },
    setReport({ commit }, e) {
        let reportId;
        if (e !== null) {
            reportId = e.target.options[e.target.options.selectedIndex].innerHTML;
        } else {
            reportId = null
        }
        commit('setReport', reportId)
    },
    setStudent({ commit }, e) {
        let studentId;
        if (e !== null) {
            studentId = e.target.options[e.target.options.selectedIndex].innerHTML;
        } else {
            studentId = null;
        }
        commit('setStudent', studentId)
    },
};

const mutations = {
    setYear: (state, yearId) => {
        // state.groups.map(x => x.selected = false);
        // state.years[state.years.findIndex((obj =>obj.selected === true))].selected = false;
        state.selYear = yearId;
        console.log("selected year: " + state.selYear)
    },
    setGroup: (state, groupId) => {
        state.selGroup = groupId;
        console.log("selected group: " + state.selGroup)
    },
    setReport: (state, reportId) => {
        state.selReport = reportId;
        console.log("selected report: " + state.selReport)
    },
    setStudent: (state, studentId) => {
        state.selStudent = studentId;
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}
