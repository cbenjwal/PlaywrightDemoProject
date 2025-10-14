export class CoursePage {
    constructor(page) {
        this.page = page
        this.manageButton = page.locator("//span[normalize-space()='Manage']")
        
        // add a locator with xpath //a[normalize-space()='Manage Courses'] and name it as manageCourses
        this.manageCourses = page.locator("//a[normalize-space()='Manage Courses']")
        
        //add a locator with xpath //button[normalize-space()='Add New Course'] and name it as addNewCourseButton
        this.addNewCourseButton = page.locator("//button[normalize-space()='Add New Course']")
        
        
//add a locator for getbytext 'Choose File' and name it as chooseFile
        this.chooseFile = page.locator("//input[@id='thumbnail']")
        //add a locator for //input[@id='name'] and name it courseNameInput
        this.courseNameInput = page.locator("//input[@id='name']")

        //add a locator for //textarea[@id='description'] and name it as courseDescription
        this.courseDescription = page.locator("//textarea[@id='description']")

        //add a locator for //input[@id='instructorNameId'] and name it as instructorName
        this.instructorName = page.locator("//input[@id='instructorNameId']")

        //add a locator for //input[@id='price'] and name it as priceInput
        this.priceInput = page.locator("//input[@id='price']")

        // add a locator for //input[@name='startDate'] and name it as startDate
        this.startDate = page.locator("//input[@name='startDate']")

        //add a locator for //input[@name='endDate'] and name it as endDate
        this.endDate = page.locator("//input[@name='endDate']")

        //add a locator for //div[normalize-space()='Select Category'] and name it as selectCategory
        this.selectCategory = page.locator("//div[normalize-space()='Select Category']")

        // add a locator for //button[normalize-space()='Save'] and name it as saveButton
        this.saveButton = page.locator("//button[normalize-space()='Save']")
    }

    // write a method to click on Manage button
    async clickManageButton() {
        await this.manageButton.click();
    }

    // write a method to click on Manage Courses link
    async clickManageCourses() {
        await this.manageCourses.click();
    }

    // write a method to click on Add New Course button
    async clickAddNewCourseButton() {
        await this.addNewCourseButton.click();
    }

    // write a method to choose file for chooseFile input field and takes filePath as parameter
    async chooseFileToUpload(thumbnail) {
       let waitforfile= this.page.waitForEvent("filechooser",{timeout:45000})
        await this.chooseFile.click() 
        let fileuploader=await waitforfile
        await fileuploader.setFiles([thumbnail]);
    }

    // write a method to enter course name for courseNameInput field and takes courseName as parameter
    async enterCourseName(courseName) {
        await this.courseNameInput.fill(courseName);
    }

    // write a method to enter course description for courseDescription field and takes description as parameter
    async enterCourseDescription(description) {
        await this.courseDescription.fill(description);
    }

    // write a method to enter instructor name for instructorName field and takes instructor as parameter
    async enterInstructorName(instructor) {
        await this.instructorName.fill(instructor);
    }      
    // write a method to enter price for priceInput field and takes price as parameter
    async enterPrice(price) {
        await this.priceInput.fill(price);
    }

    // write a method to enter start date for startDate field and takes startDateValue as parameter
    async enterStartDate(startDateValue) {
        await this.startDate.fill(startDateValue);
    }

    // write a method to enter end date for endDate field and takes endDateValue as parameter
    async enterEndDate(endDateValue) {
        await this.endDate.fill(endDateValue);
    }

    // write a method to select category from dropdown for selectCategory field and takes category as parameter
    async selectCategoryByLabel(category) {
        await this.selectCategory.click();
        const options = await this.page.locator("//button[@class='menu-item']");
        const count = await options.count();
        for (let i = 0; i < count; i++) {
            const optionText = await options.nth(i).textContent();
            if (await optionText.trim() === category) {
                await options.nth(i).click();
                break;
            }
        }
    }

    // write a method to click on Save button
    async clickSaveButton() {
        await this.saveButton.click();
    }
    // write a method to delete course by name and takes courseName as parameter
    async deleteCourseByName(courseName) {
        const deleteButton = await this.page.locator(`//td[normalize-space()='${courseName}']/following-sibling::td/button[contains(@class,'delete')]`);
        await deleteButton.click();
    }

//write a method to verify course added in the course list and takes courseName as parameter
    async VerifyCourse(courseName) {
        return await this.page.locator(`text=${courseName}`);
    }   
    
}   



