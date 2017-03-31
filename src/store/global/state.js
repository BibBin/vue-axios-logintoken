import Storage from '../../utils/localstorage'

const state = {
    ajax_loading: false,
    token:Storage.get('token') || {},
}

export default state
