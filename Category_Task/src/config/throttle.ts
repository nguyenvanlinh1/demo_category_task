
interface IThrottle {
    callback : (...args: any[]) => void,
    wait: number
}

export const throttle = ({callback, wait} : IThrottle) => {
    let shouldWait = false;
    let lastArgs : any = null;

    return (...args : any[]) => {
        if(shouldWait){
            lastArgs = args;
            return;
        }

        callback(...args);
        shouldWait = true;
        setTimeout(() => {
            if(lastArgs === null){
                shouldWait = false;
            }
            else{
                shouldWait = false;
                callback(...lastArgs);
                lastArgs = null;
            }
        }, wait)
    }
}