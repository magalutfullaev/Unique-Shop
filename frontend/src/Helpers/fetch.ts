import {SITE_URL} from "../data/consts";

export const fetching = async (url: string) => {
    return fetch(`${SITE_URL}api/${url}`)
        .then((res) => res.json())

    // return data
}