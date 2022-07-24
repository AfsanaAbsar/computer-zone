import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="hero mb-12 mt-12">
                <div class="hero-content flex-col lg:flex-row-reverse items-center">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold text-primary">Contact Us</h1>

                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <input type="text" placeholder="Enter Your Message" class="input input-bordered" />

                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;