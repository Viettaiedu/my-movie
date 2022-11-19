
import get from "./httpRequest";
export const category = {
    movie: 'movie',
    tv: 'tv',
};

export const movieType = {
    popular : 'popular',
    upcoming:'upcoming',
    top_rated:"top_rated"
}

export const tvType = {
    popular : 'popular',
    top_rated:"top_rated",
    on_the_air:"on_the_air"
}

const tmdbClient = {
    getMoviesList : async(type , params = {}) => {
        const url = 'movie/' + movieType[type];
        return await get(url,params);
    },
    getTvList : async(type , params = {}) => {
        const url = 'tv/' + tvType[type];
        return  await get(url,params)
    },
    // getVideos ,  search ,detail,  credits , similar
    getVideos: async (cate , id ,params = {}) => {
        const url = category[cate] + "/" + id +"/videos";
        return await get(url,params);
    },
    search:async(cate,params = {} ) => {
        const url = "search/" + category[cate]
        return await get(url,params)
    },
    detail: async(cate, id , params= {}) => {
        const url = category[cate] + "/" + id
        return await get(url,params)
    },
    similar:async(cate , id ,params= {} ) => {
        const url = category[cate] + "/" + id +'/similar'
        return await get(url,params)
    },
    credits: async(cate , id , params= {}) => {
        const url = category[cate] + "/" + id +'/credits'
        return await get(url,params)
    }
    


}


export default tmdbClient;



