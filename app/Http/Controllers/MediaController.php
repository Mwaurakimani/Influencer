<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class MediaController extends Controller
{
    public function DeleteMedia(Request $request)
    {
        $media = Media::find($request['media']['id']);

        if(File::exists(storage_path('app/public/'.$media->path))){
            File::delete(storage_path('app/public/'.$media->path));
        }

        $media->delete();

        return [
            'status' => true
        ];
    }
}
