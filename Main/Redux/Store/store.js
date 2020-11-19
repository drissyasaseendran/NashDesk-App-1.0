export const loadState = () =>
{
    try {
        const serialiedState = localStorage.getItem('Nash');
        if (serialiedState === null )
        {
            return undefined;
        }
        return JSON.parse(serialiedState) 
    } catch(err)
        {
            return undefined;
        }

};
export const saveState = (state) =>
{
    try {
        const serialiedState = JSON.stringify(state) 
        localStorage.setItem('Nash',serialiedState);
    }catch(err)
    {
        // return undefined;
    }

};