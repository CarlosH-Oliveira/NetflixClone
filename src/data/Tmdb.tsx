const API_KEY = '863105183b1e8c395e1f477269cb62bc'
const API_BASE_URL = 'https://api.themoviedb.org/3'
/*
- originais netflix
- recomendados
- trending
- ação
- comédia
- terror
- romance
- documentários
*/

const basicFetch = async(endpoint:string) => {
    const response = await fetch(API_BASE_URL+endpoint)
    if(response.ok){
        var data = await response.json()
        return data
    }else{
        return null
    }
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch('/discover/tv?api_key='+API_KEY+'&with_network=213&language=pt-br')
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch('/trending/all/week?api_key='+API_KEY+'&language=pt-br')
            },
            {
                slug: 'top rated',
                title: 'Em alta',
                items: await basicFetch('/movie/top_rated?api_key='+API_KEY+'&language=pt-br')
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch('/discover/movie?api_key='+API_KEY+'&with_genres=28&language=pt-br')
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch('/discover/movie?api_key='+API_KEY+'&with_genres=35&language=pt-br')
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch('/discover/movie?api_key='+API_KEY+'&with_genres=27&language=pt-br')
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch('/discover/movie?api_key='+API_KEY+'&with_genres=10749&language=pt-br')
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch('/discover/movie?api_key='+API_KEY+'&with_genres=99&language=pt-br')
            },
        ]
    },
    getDetailedInfo : async(movieId:number) => {
        var data:any
        if(movieId){
            data = await basicFetch("/movie/"+movieId+"?api_key="+API_KEY+"&language=pt-br")
            if (data == null){
                data = await basicFetch("/tv/"+movieId+"?api_key="+API_KEY+"&language=pt-br")
            }
        }
        return data
    }
}