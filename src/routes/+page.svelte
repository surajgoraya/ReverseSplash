<div class="min-h-screen flex flex-col md:justify-normal xl:justify-center ">
    <h1 class="text-3xl">Reverse search any Unsplash Image!</h1>
    <p class="mt-2">
        Ever need to find where you got an Unsplash image from? This tool will help find it again <i
            >(as long as the file name is untouched.)</i
        >
    </p>
    <form method="POST" action="/api/find" class="flex flex-col gap-4 justify-center">
        <input
            type="file"
            id="unsplash_image"
            name="unsplash_image"
            accept="image/png, image/jpeg"
            class="bg-ctp-crust p-4 mt-4 rounded-md file:float-end file:py-1 file:px-3 file:border-[1px]
        file:text-xs file:font-medium
        file:bg-ctp-pink file:text-ctp-crust
        hover:file:cursor-pointer hover:file:opacity-75
        hover:file:transition-opacity
        hover:file:text-ctp-crust file:rounded-lg"
        />
        <button class="p-4 bg-ctp-pink rounded-lg text-ctp-crust hover:opacity-75 hover:transition-all">Find!</button>
    </form>
    
</div>
