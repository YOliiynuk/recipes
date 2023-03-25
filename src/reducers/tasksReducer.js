export default function tasksReducer (tasks, action){
    switch (action.type){
        case 'added':{
            return[
                ...tasks, action.payload
            ]
        }
        case 'changed':
            
    }
}