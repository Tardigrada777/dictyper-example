interface dtFuncArguments {"message.hello";"message.greeting";"pages.home.description";"pages.about.title";}declare function dt(key: keyof dtFuncArguments): dtFuncArguments;