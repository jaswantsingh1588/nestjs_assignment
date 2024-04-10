Nestjs Assignment
Nestjs Version: 10.3
Dtabase: Mysql

This project is assignment which has main three routes.
 - Create a form POST: /form
 - Update data of Form: /fill_data/form_title="user"
 - Get data: /fill_data?form_title="user"

Functionality and Elements:

form_entity: Using typeORM to define table entities.

form_controller:  Handling all three routes of create, update and fetch data.

form_service: Serving as business login for submitting data to repositories.

DTO: Having create and update DRO files having definition of adding/updating data fields.

Unique-validation: A separate functionlity for unique validation check for unique_id field has made and implemented in DTO.

Module: A module file which is binding Services, Entity and controller for the project.




   
   
