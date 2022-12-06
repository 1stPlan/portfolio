<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            // $table->dropForeign('posts_category_id_foreign');
            // $table->dropColumn('category_id');
            $table->integer('blog_id')->after('role_id');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn('blog_id');
            // $table->foreignId('category_id')->constrained('categories'); 
            $table->dropSoftDeletes();
        });
    }
};
