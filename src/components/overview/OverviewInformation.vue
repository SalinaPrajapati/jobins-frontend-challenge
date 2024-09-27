<template>
  <div class="w-full rounded-2xl shadow-md bg-white px-6 py-4">
    <div class="flex w-full justify-between items-center gap-4">
      <div class="flex items-center gap-3">
        <div class="w-16">
          <img
            :src="require('@/assets/images/user-default.png')"
            alt="Avatar"
            class="h-16 w-16 object-cover bg-white p-1 rounded-full"
          />
        </div>
        <div>
          <p class="font-semibold">Robert Fox</p>
          <p class="text-gray-500">robertfox@gmail.com</p>
        </div>
      </div>
      <div>
        <p class="text-md font-semibold text-gray-700">Personal Information</p>
        <div class="grid grid-cols-2 items-center my-2 gap-3 text-xs">
          <p>Contact number</p>
          <p>(201) 555-0124</p>
        </div>
        <div class="grid grid-cols-2 items-center mb-2 gap-3 text-xs">
          <p>Date of birth</p>
          <p>1 jan, 1985</p>
        </div>
        <div class="grid grid-cols-2 items-center mb-2 gap-3 text-xs">
          <p>Member since</p>
          <p>3 march 2023</p>
        </div>
      </div>
      <div>
        <p class="text-md font-semibold text-gray-700">SHIPPING ADDRESS</p>
        <p class="text-xs my-3">3517 W.Gray St.Utica, pennsylvania 57867</p>
        <div class="flex items-center justify-between mt-2">
          <div>
            <p class="font-semibold text-gray-700">150</p>
            <p class="text-xs">Total Order</p>
          </div>
          <div>
            <p class="font-semibold text-gray-700">140</p>
            <p class="text-xs">Completed</p>
          </div>
          <div>
            <p class="font-semibold text-gray-700">10</p>
            <p class="text-xs">Cancelled</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
