export interface Movie {
    movie: {
        id: string;
        label: string;
        descriptionOne: string;
        descriptionTwo: string;
        coverImgPath: string;
        genre: string[];
        rate: string;
        rating: number;
        videoPathOnYoutube: string;
        watchingTimes: Array<{
        day: string;
        times: string[];
        }>;
        runningTime: string;
        state: string;
        productionDate: string;
        director: string;
        certificateAge: string;
        releasedDate: string;
        starring: string[];
    }
  }
  
