## Instructions

BASE_URL :  https://praveen-liftoff-assignment.herokuapp.com/ 


#### Important Endpoints
- **GET**  :  **/api/v1/hello**                            - Test route
- **GET**  :  **/api/v1/exams/1/questions**  - Questions list
- **POST**:  **/api/v1/exams/1/results**       - Generate result
		- body : `{
				answers : [{
					_id : String,
					selectedIndex : String
				},]
			}`

