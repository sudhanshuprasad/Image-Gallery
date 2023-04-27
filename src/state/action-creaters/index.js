export const setLogin = (login) =>{
    return (dispatch) => {
        dispatch({
            type: "set-Login",
            payload: login,
        })
    }
}

export const setThemeDark = (theme) =>{
    return (dispatch) => {
        dispatch({
            type: "set-Theme-Dark",
            payload: theme,
        })
    }
}
