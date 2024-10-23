import { PrismaClient } from '@prisma/client'
import {movies} from '../src/assets/moviesData'
import {posts} from '../src/assets/postsData'

const prisma = new PrismaClient()

async function main() {
    await prisma.watchingTime.deleteMany();
    await prisma.movie.deleteMany();
    await prisma.post.deleteMany();

    for(const movie of movies){
        const createdMovie = await prisma.movie.create({
            data: {
                id: movie.id,
                label: movie.label,
                descriptionOne: movie.descriptionOne,
                descriptionTwo: movie.descriptionTwo,
                coverImgPath: movie.coverImgPath,
                genre: movie.genre,
                rate: movie.rate,
                rating: movie.rating,
                videoPathOnYoutube: movie.videoPathOnYoutube,
                runningTime: movie.runningTime,
                state: movie.state,
                productionDate: movie.productionDate,
                director: movie.director,
                certificateAge: movie.certificateAge,
                releasedDate: movie.releasedDate,
                starring: movie.starring
            }
        })

        const watchingTimes = movie.watchingTimes.map(time => ({
            day: time.day,
            times: time.times,
            movieId: createdMovie.id
        }))

        await prisma.watchingTime.createMany({
            data: watchingTimes
        })

    }
    
    await prisma.post.createMany({
        data: posts.map(post => ({
            slug: post.slug,
            categories: post.categories,
            title: post.title,
            descriptionOne: post.descriptionOne,
            descriptionTwo: post.descriptionTwo,
            postImgPath: post.postImgPath,
            tags: post.tags
        }))
    })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
