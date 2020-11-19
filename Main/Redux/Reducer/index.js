import {combineReducers} from 'redux';
import DueToday from './DueDateReducer'
import OverDue from './OverdueReducer'
import Assigned from './AssignedReducer'
import UnAssigned from './UnAssignedReducer'
import Resolved from './ResolvedReducer'
import Closed from './ClosedReducer'
import MessageMemo from './MessageMemoReducer'
import Agents from './AgentsReducer'
import Roles from './RoleReducer'
import Group from './GroupReducer'
import Canned from './CannedReducer'
import Category from './CategoryReducer'
import Emotionalglands from './EmotionalGalndsReducer'
import Tags from './TagReducer'
import Leader from './LeaderReducer'
const reducer = combineReducers({
 
    DueToday,
    OverDue,
    Assigned,
    UnAssigned,
    Resolved,
    Closed,
    MessageMemo,
    Agents,
    Roles,
    Group,
    Canned,
    Category,
    Emotionalglands,
    Tags,
    Leader

})

export default reducer;