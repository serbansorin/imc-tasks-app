## Tasks App IMC

### Important:

** i made a docker-compose.yml
** i made a dockerfile for front:

```bash
cd tasks && docker run -it givename/givename
```

I have tested it with:

-- backend: php artisan serve (this will serve on port 8000)
-- front: npm run dev (with the help of proxy from vite.config every route that goes to /api it will automatically be proxied to 127.0.0.1:8000 ... work with IP and PORT)

### Details

Create an application, preferably in Angular (or alternatively, Vue/React), for managing tasks with asynchronous operations. The application should allow the following functionalities:

1. User registration (with validations for email and mandatory password)
2. User login
3. Task listing
4. Task creation (with validations for mandatory title and description)
5. Task editing
6. Task deletion

Flow:

- Register a new user
- Manually log in with the registered email and password
- Display the list of tasks
- Add tasks
- Edit tasks
- Delete tasks

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo-url.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project-directory
   ```

3. Install the dependencies:

   ```bash
   composer install
   ```

4. Create a copy of the `.env.example` file and rename it to `.env`:

   ```bash
   cp .env.example .env
   ```

5. Generate an application key:

   ```bash
   php artisan key:generate
   ```

6. Configure your database connection in the `.env` file.

7. Migrate the database:

   ```bash
   php artisan migrate
   ```

### Usage

1. Start the development server:

   ```bash
   php artisan serve
   ```

2. Access the application in your browser at `http://localhost:8000`.

3. Register a new user and log in with the registered credentials.

4. Use the application to manage tasks as described in the flow above.
