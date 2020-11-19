'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  // async find(ctx) {
  //   const availableArticles = await strapi.services.course.find({
  //     time_end_gte: new Date(),

  //   })
  //   return availableArticles
  // },

  // async update(ctx) {
  //   const { id } = ctx.params;
  //   // data được gửi lên
  //   const data = ctx.request.body;
  //   console.log('body: ', data)

  //   // Tìm course by id
  //   const courseById = await strapi.services.course.find({ id });
  //   console.log('course: ', courseById)
  //   try {
  //     if (courseById[0].code == data.code) {
  //       const updatedCourse = await strapi.services.course.update({ id }, ctx.request.body);
  //       return { success: true }
  //     } else {
  //       return { success: false }
  //     }
  //   } catch (error) {
  //     return { success: false }
  //   }
  // },

  async addStudent(ctx) {
    const { userId, courseId } = ctx.params;
    const data = ctx.request.body

    // Tìm course by id
    const courseById = await strapi.services.course.find({ id: courseId });
    try {
      if (courseById[0].code == data.code) {
        let courseData = courseById[0]
        let students = courseById[0].users
        courseData.users = students?.push({id: userId})
        const updatedCourse = await strapi.services.course.update({ id: courseId }, courseData);
        return { success: true }
      } else {
        return { success: false }
      }
    } catch (error) {
      return { success: false }
    }
  }
};
