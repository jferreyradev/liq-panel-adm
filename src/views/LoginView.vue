<script setup></script>

<template>
  <div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div class="w-full p-6 m-auto rounded-md shadow-md ring-2 lg:max-w-md">
      <h1 class="text-3xl font-semibold text-center">Login a panel</h1>
      <form class="space-y-4">
        <div>
          <label class="label">
            <span class="text-base label-text">Email</span>
          </label>
          <input type="text" placeholder="Email Address" class="w-full input input-bordered" />
        </div>
        <div>
          <label class="label">
            <span class="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            class="input validator w-full input input-bordered"
          />
          <p class="validator-hint">
            Must be more than 8 characters, including
            <br />At least one number <br />At least one lowercase letter <br />At least one
            uppercase letter
          </p>
        </div>

        <a href="#" class="text-xs hover:underline">Forget Password?</a>
        <div>
          <button class="btn-neutral btn btn-block">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
