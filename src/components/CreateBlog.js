import React from 'react'

const CreateBlog = () => {
    return (
        <>
            <main>
                <section className="container px-5 create_bog_wrapper">
                    <h1 className="roleway_font text-center mb-4">Create a new blog</h1>

                    {/* title and blogs  */}
                    <div class="w-50 mx-auto">
                        <form action="">
                            <div class="mb-4">
                                <label for="exampleFormControlInput1" class="form-label h6">Blog Title</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Blog Title" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label h6">Write your blog</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                            </div>

                            <button className="btn btn-primary w-100">Publish</button>
                        </form>
                    </div>


                </section>
            </main>
        </>
    )
}

export default CreateBlog
