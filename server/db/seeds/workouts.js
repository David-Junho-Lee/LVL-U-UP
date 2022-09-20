exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workouts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {
          id: 1,
          name: 'push up',
          video_url: 'https://www.youtube.com/embed/IODxDxX7oi4',
        },
        {
          id: 2,
          name: 'pull up',
          video_url: 'https://www.youtube.com/embed/eGo4IYlbE5g',
        },
        {
          id: 3,
          name: 'squat',
          video_url: 'https://www.youtube.com/embed/gsNoPYwWXeM',
        },
        {
          id: 4,
          name: 'coventional deadlift',
          video_url: 'https://www.youtube.com/embed/1ZXobu7JvvE',
        },
        {
          id: 5,
          name: 'dips',
          video_url: 'https://www.youtube.com/embed/2z8JmcrW-As',
        },
        {
          id: 6,
          name: 'bent-over row',
          video_url: 'https://www.youtube.com/embed/kBWAon7ItDw',
        },
        {
          id: 7,
          name: 'military press',
          video_url: 'https://www.youtube.com/embed/QAQ64hK4Xxs',
        },
      ])
    })
}
