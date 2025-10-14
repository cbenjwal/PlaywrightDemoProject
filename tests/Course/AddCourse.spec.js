import {test, expect} from "../../fixtures/auth.fixture.js";
import { CoursePage } from '../../pages/CoursePage.js'
import { LoginPage } from '../../pages/LoginPage.js'
//import test data from json file
import course from '../../testdata/course.json'
//import user data from users.json file
import users from '../../testdata/users.json'

test.describe('Create New Course Tests', async () =>
 {

    let coursePage
    let loginPage

    test.beforeEach(async ({ page }) => {
        coursePage = new CoursePage(page)
        loginPage = new LoginPage(page)
       
    });
   
    test('should add a new course successfully', async ({page,loginPage}) => 
        {
      //click on Manage button                    
        await coursePage.clickManageButton()
        //click on Manage Courses link
        await coursePage.clickManageCourses()
        // loop through all courses in json file and add them one by one

        //click on Add New Course button
        await coursePage.clickAddNewCourseButton()  
        // fill the form with data from course.json file
        await coursePage.chooseFileToUpload(course.thumbnail)
        await coursePage.enterCourseName(course.name)
        await coursePage.enterCourseDescription(course.description)
        await coursePage.enterInstructorName(course.instructorName)
        await coursePage.enterPrice(course.price)
        await coursePage.enterStartDate(course.startDate)
        await coursePage.enterEndDate(course.endDate)
        await coursePage.selectCategoryByLabel(course.category)
        //click on Save button
        await coursePage.clickSaveButton()
        //verify course added successfully by checking course name appears in the list
  expect(await coursePage.VerifyCourse(course.name)).toBeVisible()
        await coursePage.deleteCourseByName(course.name)
        expect(await coursePage.VerifyCourse(course.name)).toHaveCount(0)
                await page.waitForTimeout(3000)

    });

});